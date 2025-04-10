"use client"
import { useParams } from 'next/navigation';
import { CkFinderAuthStorage } from './ckfinder-auth-storage';

export function CkFinderAuthProvider() {
  const params = useParams();
  
  // For dynamic route like `/products/[id]`
  const { authToken } = params;
  if (!authToken) {
    return null;
  }

  return (
    <CkFinderAuthStorage
      token={authToken as string}
      authServerUrl="https://dev.keycloak.14west.io/realms/new-iris-qa"
      authClientId="iris-admin.api.gateway"
    />
  );
}
