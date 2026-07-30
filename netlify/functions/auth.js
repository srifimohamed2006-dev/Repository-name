exports.handler = async (event) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const redirectUri = `${process.env.URL}/api/callback`;
  const state = Math.random().toString(36).substring(2);

  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo&state=${state}`;

  return {
    statusCode: 302,
    headers: {
      Location: githubAuthUrl,
    },
    body: "",
  };
};
