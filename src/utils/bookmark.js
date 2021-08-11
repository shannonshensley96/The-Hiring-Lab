import tokenService from './tokenService';

const BASE_URL = '/';

export function create(bookMark) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: bookMark,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    
    }).then(res => res.json());
  }
