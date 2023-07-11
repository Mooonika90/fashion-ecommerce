import { FAKE_STORE_BASE_URL } from '../config';
function fetcherStore(pathname = '', params = '') {
	return fetch(`${FAKE_STORE_BASE_URL}${pathname}${params}`).then((res) =>
		res.json()
	);
}

export default fetcherStore;
