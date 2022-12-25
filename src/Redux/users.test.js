import usersReducer, { setUsers } from './usersReducer'

let initState = {
   users: [],
   amountPages: 10,
   pageSize: 8,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
}

test('usersTest', () => {
   let newState = usersReducer(initState, setUsers(['Dima', 'Vova', 'Yura']))
   expect(newState.users).toStrictEqual(['Dima', 'Vova', 'Yura'])
})
