//TypeScript
import { ComprehendClient } from '@aws-sdk/client-comprehend-node/ComprehendClient';
import { BatchDetectKeyPhrasesCommand } from '@aws-sdk/client-comprehend-node/commands/BatchDetectKeyPhrasesCommand';
import sampleDataSet from '../../data/speeches';
var v = require('voca');

export default (req, res) => {
  let sampleData = sampleDataSet.map((d) => d.data);
  const comprehend = new ComprehendClient({ region: 'ap-southeast-2' });
  const params = {
    LanguageCode: 'en',
    TextList: sampleData,
  };
  const batchDetectKeyPhrasesCommand = new BatchDetectKeyPhrasesCommand(params);
  comprehend
    .send(batchDetectKeyPhrasesCommand)
    .then((data) => {
      data['ResultList'].map((i) => {
        i['KeyPhrases'].map((keyPhrases, i) => {
          sampleData[i] = v.replace(
            sampleData[i],
            keyPhrases['Text'],
            '<b>' + keyPhrases['Text'] + '</b>'
          );
        });
      });
      return sampleData;
      // {
      //   Index: 0,
      //   KeyPhrases: [
      //     {
      //       Score: 0.9999995827674866,
      //       Text: 'the noble idea',
      //       BeginOffset: 22,
      //       EndOffset: 36
      //     },
      //     {
      //       Score: 0.9999999403953552,
      //       Text: 'a white Australia—snow-white Australia',
      //       BeginOffset: 40,
      //       EndOffset: 78
      //     }
      //   ]
      // }
    })
    .then((data) => {
      res.statusCode = 200;
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
