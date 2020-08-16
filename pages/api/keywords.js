//TypeScript
import { ComprehendClient } from '@aws-sdk/client-comprehend-node/ComprehendClient';
import { BatchDetectKeyPhrasesCommand } from '@aws-sdk/client-comprehend-node/commands/BatchDetectKeyPhrasesCommand';
import sampleDataSet from '../../data/speeches';
var v = require('voca');

export async function getData() {
  let sampleData = sampleDataSet.map((d) => d.data);
  let saData = [];

  const comprehend = new ComprehendClient({ region: 'ap-southeast-2' });
  const params = {
    LanguageCode: 'en',
    TextList: sampleData,
  };
  return new Promise((resolve) => {
    const batchDetectKeyPhrasesCommand = new BatchDetectKeyPhrasesCommand(
      params
    );
    comprehend
      .send(batchDetectKeyPhrasesCommand)
      .then((data) => {
        data['ResultList'].map((speech, i) => {
          speech['KeyPhrases'].map((keyPhrases) => {
            sampleData[i] = v.replace(
              sampleData[i],
              keyPhrases['Text'],
              '<b>' + keyPhrases['Text'] + '</b>'
            );
          });
        });
        resolve(sampleData);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

export default (req, res) => {
  (async () => {
    const myData = await getData();
    res.statusCode = 200;
    res.json(myData);
  })();
};
