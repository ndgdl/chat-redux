export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(res => res.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}
