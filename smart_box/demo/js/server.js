const express = require('express');
const cors = require('cors');
const app = express();
const port = 5555;

app.use(cors());

/**
 * Sample data
 */
const sampleData = [
  {
    id: 'D1',
    label_en: 'Disease A',
    synonym_en: 'Alternative name for Disease A',
    label_ja: '病気A',
    synonym_ja: '病気Aの別名',
  },
  {
    id: 'D2',
    label_en: 'Disease B',
    synonym_en: 'Alternative name for Disease B',
    label_ja: '病気B',
    synonym_ja: '病気Bの別名',
  },
  {
    id: 'D3',
    label_en: 'Disease C',
    synonym_en: 'Alternative name for Disease C',
    label_ja: '病気C',
    synonym_ja: '病気Cの別名',
  },
];

/**
 * API endpoint
 * Returns an error message if the query parameter `text` does not exist or is empty,
 * otherwise returns the sample data.
 */
app.get('/moshikashite_test_api', (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res
      .status(400)
      .json({ error: 'Query parameter "text" is required' });
  }

  res.json(sampleData);
});

/**
 * Start the server
 */
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
