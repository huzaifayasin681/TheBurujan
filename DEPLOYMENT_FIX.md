# Fixing "Site Can't Be Reached" (0.0.0.0 Error)

The error `https://0.0.0.0:3000/api/auth/signin/google` occurs because the server thinks its public URL is `0.0.0.0:3000`. This is valid for starting the server internally, but invalid for a browser to visit.

## 1. Update Hostinger Environment Variables
You need to explicitly tell your app what its **real domain** is.

**If you are using a VPS (Ubuntu/Docker):**
Open your `.env` file on the server (e.g., via SSH or File Manager) and add/update:
```bash
AUTH_URL="https://theburujan.tech"
AUTH_TRUST_HOST="true"
```
*(Replace `https://theburujan.tech` with your actual domain name)*

**If you are using Hostinger App Platform or Vercel:**
Go to the **Settings > Environment Variables** section and add:
- Key: `AUTH_URL`
- Value: `https://theburujan.tech`

## 2. Update Google Cloud Console
Google Login will fail if the redirect URI doesn't match exactly.

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Navigate to **APIs & Services > Credentials**.
3. Select your OAuth 2.0 Client ID.
4. Under **Authorized redirect URIs**, ensure you have:
   ```
   https://theburujan.tech/api/auth/callback/google
   ```
   *(Make sure it is `https` and includes your domain, NOT localhost or 0.0.0.0)*

## 3. Rebuild/Restart
After updating the variables, **restart your application** for changes to take effect.
