import styled from "styled-components";
import useSWR from "swr";
import React from "react";

const AuthStyle = styled.a`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  color: white;
  text-decoration: none;
  img {
    margin-left: 0.5rem;
    width: 1.5rem;
    border-radius: 50%;
    border: 0.1rem white solid;
  }
`;

export interface AuthStatusI {
  name?: string;
  profileImage?: string;
}

const fetcher = (url: string): Promise<AuthStatusI> => fetch(url, { credentials: "include" }).then((it) => it.json());

/**
 * @param {string} sanityProjectApiUrl - You can get the project api-url from the sanity client like this:   const { url } = sanityClient.config();
 */
export function useSanityAuthstatus(sanityProjectApiUrl: string) {
  const { data: authStatus, error } = useSWR<AuthStatusI>(`${sanityProjectApiUrl}/users/me`, fetcher);

  return {
    authStatus,
    error,
  };
}
interface Props {
  /**
   * You can get the project api-url from the sanity client like this:   const { url } = sanityClient.config();
   */
  sanityProjectApiUrl: string;
  studioUrl: string;
}

export function AuthStatus(props: Props) {
  const { authStatus, error } = useSanityAuthstatus(props.sanityProjectApiUrl);

  const erLoggetInn = authStatus?.name !== undefined;

  if (!authStatus && !error) {
    return null;
  }

  if (erLoggetInn) {
    const initials = authStatus?.name?.split(" ").map((it) => it[0]);
    return (
      <AuthStyle href={props.studioUrl}>
        {initials}
        <img src={authStatus?.profileImage} alt="" />
      </AuthStyle>
    );
  }

  return <AuthStyle href={props.studioUrl}>Logg inn</AuthStyle>;
}
