import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

import { usersData } from '../data/usersData';
import { Button } from './Button/Button';
import { UsersList } from './UsersList/UsersList';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users: usersData,
    isListShown: false,
    isFormShown: false,
  };

  deleteUser = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => id !== user.id),
    }));
  };

  showUser = () => {
    this.setState({ isListShown: !this.state.isListShown });
  };

  openForm = () => {
    this.setState({ isFormShown: !this.state.isFormShown });
  };

  addUser = data => {
    const user = {
      id: nanoid(),
      ...data,
    };
    this.setState(prevState => ({
      users: [...prevState.users, user],
    }));
  };

  render() {
    const { users, isListShown, isFormShown } = this.state;

    return (
      <ThemeProvider theme={theme}>
        {isListShown ? (
          <UsersList
            users={users}
            deleteUser={this.deleteUser}
            openForm={this.openForm}
          />
        ) : (
          <Button text="Show users" clickHandler={this.showUser} />
        )}
        {isFormShown && (
          <Form addUser={this.addUser} openForm={this.openForm} />
        )}
      </ThemeProvider>
    );
  }
}
