import {take, takeEvery, takeLatest, takeLeading, put, call, fork} from 'redux-saga/effects'

async function getPeople() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resp.json()
  return data
}
async function getPosts() {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const data = await resp.json()
  return data
}

function* loadPeoples() {
  const people = yield call(getPeople);
  yield put({type: 'SET_PEOPLES', payload: people})
}
function* loadPosts() {
  const posts = yield call(getPosts)
  yield put({type: 'SET_POSTS', payload: posts})
}

export function* clickWorkerSaga () {
  yield fork(loadPeoples)
  yield fork(loadPosts)
}

export function* watchFetchPeoplesSaga () {

  yield takeEvery('FETCH_DATA', clickWorkerSaga)
}


export default function* rootSaga() {
  console.log('Saga ready')
  yield watchFetchPeoplesSaga();
}