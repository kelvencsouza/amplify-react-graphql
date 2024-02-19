'use client'
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";

import { Amplify } from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure(config);

function App({ signOut }) {
  return (
    <View>
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);