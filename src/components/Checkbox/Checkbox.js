import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import Checkbox from './Checkbox.component';

export default createFragmentContainer(
    Checkbox,
    {
        todo: graphql`
            fragment Checkbox_todo on todo_app_todos @argumentDefinitions(
                where: {type: todo_app_todos_bool_exp}
            ){
                complete
                todo_id
            }
        `
    }
);