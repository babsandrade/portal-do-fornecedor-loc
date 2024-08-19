export default {
 meEndpoint: process.env.NEXT_PUBLIC_PROFILE_URL_API,
  loginEndpoint: process.env.NEXT_PUBLIC_LOGIN_URL_API,
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
