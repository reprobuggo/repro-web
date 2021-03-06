import MainLayout from "../../components/main-layout.jsx";

const BugPage = (props) => {
  const {
    actualBehavior,
    error,
    id,
    expectedBehavior,
    stepsToRepro,
    title,
  } = props;

  if (error) {
    return (
      <MainLayout>
        <p>{error}: {id}</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1>{title}</h1>
      <h3>Bug id</h3>
      <p>{id}</p>
      <h3>Expected Behavior</h3>
      <p>{expectedBehavior}</p>
      <h3>Actual Behavior</h3>
      <p>{actualBehavior}</p>
      <h3>Steps To Repro</h3>
      <ul>
        {stepsToRepro.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </MainLayout>
  );
};

BugPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  // todo: hit our API with this bug hashed id to get the bug in question,
  // so we can use real data in the UI

  const validIds = [
    'abc123',
    'def456',
    'ghi789',
  ];

  if (!(validIds.includes(id))) {
    return {
      error: 'Bug not found',
      id
    };
  }

  return {
    id,
    title: 'What a bug title',
    expectedBehavior: 'A thing happens',
    actualBehavior: 'A thing does not happen',
    stepsToRepro: [
      'Turn on your computer', 'Open a web browser', 'Try to do a thing',
    ],
  };
}

export default BugPage;
