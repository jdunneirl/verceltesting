'use client';

import { useEffect } from 'react';

/**
 * THIS IS JUST A TEMPORARY WORKAROUND UNTIL WE HAVE PROPER AUTH
 *
 * Auth guide for ckfinder.
 * Below is pseudo-code. See `config.js` file that is loaded when CKFinder is initialised.
 *
 * CKFinder expects two records, one in local storage and one in session storage.
 * The session storage one:
 *
 * ```
 * sessionStorage.getItem('environmentVariables');
 * ...
 * if (session && session.AUTH_SERVER_URL && session.AUTH_CLIENT_ID) {
 *   return `${session.AUTH_SERVER_URL}:${session.AUTH_CLIENT_ID}`;
 * }
 * ```
 *
 * This is used as the key of a local storage record where the access token is stored.
 *
 * ```
 * const item = localStorage.getItem(key);
 * ...
 * return item.access_token;
 * ```
 **/

export function CkFinderAuthStorage(props: {
  token: string;
  authServerUrl: string;
  authClientId: string;
}) {
  useEffect(() => {
    window.sessionStorage.setItem(
      'environmentVariables',
      JSON.stringify({
        AUTH_SERVER_URL: props.authServerUrl,
        AUTH_CLIENT_ID: props.authClientId,
      }),
    );

    const key = `oidc.user:${props.authServerUrl}:${props.authClientId}`;
    const value = {
      access_token: props.token,
    };

    window.localStorage.setItem(key, JSON.stringify(value));
  }, [props.token, props.authClientId, props.authServerUrl]);

  return null;
}
