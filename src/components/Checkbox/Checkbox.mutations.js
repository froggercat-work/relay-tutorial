import {
    commitMutation
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../../env/RelayEnvironment'

const mutation = graphql`
    mutation CheckboxMutationsMutation($pk_columns: todo_app_todos_pk_columns_input!, $_set: todo_app_todos_set_input) {
        update_todo_app_todos_by_pk(pk_columns: $pk_columns, _set: $_set) {
            todo_id
            complete
            id
        }
    }
`

export let TodoStatusMutation = (props, callback) => {
    console.log(props)
    const {todo: {todo_id, complete, id}} = props
    const variables = {
        pk_columns: {
            todo_id: todo_id
        },
        _set: {
            complete: complete
        }
    };

    const optimisticResponse = {
        update_todo_app_todos_by_pk: {
            todo_id: todo_id,
            complete: complete,
            id: id
        }
    }

    commitMutation(
        RelayEnvironment,
        {
            mutation,
            optimisticResponse,
            variables,
            // 6
            onCompleted: () => {
                callback()
            },
            onError: err => console.error(err),
        },
    )

}