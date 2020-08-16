//TypeScript
import { ComprehendClient } from '@aws-sdk/client-comprehend-node/ComprehendClient';
import { BatchDetectDominantLanguageCommand } from '@aws-sdk/client-comprehend-node/commands/BatchDetectDominantLanguageCommand';

export default (req, res) => {
  const comprehend = new ComprehendClient({ region: 'ap-southeast-2' });
  //clients can be shared by different commands
  const params = {
    LanguageCode: 'en',
    TextList: [
      'Let us keep before us the noble idea of a white Australia—snow-white Australia if you will. Let it be pure and spotless.',
    ],
  };
  const batchDetectDominantLanguageCommand = new BatchDetectDominantLanguageCommand(
    params
  );
  comprehend
    .send(batchDetectDominantLanguageCommand)
    .then((data) => {
      console.log('data');
      console.log(data);
      console.log(data['ResultList'][0]);
    })
    .catch((error) => {
      console.log(error);
    });
};
