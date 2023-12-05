const refreshToken = async () => {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

  const baseUrl = "https://oauth.battle.net/token";

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  console.log(data);
  return data.access_token;
};
export { refreshToken };

// Example Response
/*
{access_token: 'USkpKkJgQtyNM4vtAAy0tDmdj6dP5hA9Wj', token_type: 'bearer', expires_in: 86399, sub: '76f3d782a8ef4a4886c8a2e1d80b2eda'}
access_token
: 
"USkpKkJgQtyNM4vtAAy0tDmdj6dP5hA9Wj"
expires_in
: 
86399
sub
: 
"76f3d782a8ef4a4886c8a2e1d80b2eda"
token_type
: 
"bearer"
[[Prototype]]
: 
Object
*/
