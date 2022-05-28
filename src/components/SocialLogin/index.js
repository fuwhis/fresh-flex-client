import React from 'react';

import SuperTokens from 'supertokens-auth-react/lib/build/superTokens';
import ThirdPartyEmailPassword, {
  Github,
  Google,
  Apple,
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from "supertokens-auth-react/recipe/session";

// SuperTokens INIT
SuperTokens.init({
  appInfo: {
    appName: "fresh-flex-client",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Apple.init(),
        ],
      },
    }),
    Session.init(),
  ],
});

function SocialLogin() {
  return (
    <div>login form</div>
  );
}

export default SocialLogin;