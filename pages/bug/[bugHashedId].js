import Head from 'next/head';
import MainLayout from "../../components/main-layout.jsx";

const BugPage = (props) => {
  const {
    actualBehavior,
    bugHashedId,
    expectedBehavior,
    stepsToRepro,
    title,
  } = props;

  return (
    <MainLayout>
      <h1>{title}</h1>
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
  const { bugHashedId } = query;
  // todo: hit our API with this bug hashed id to get the bug in question,
  // so we can use real data in the UI
  return {
    bugHashedId,
    title: 'What a bug title',
    expectedBehavior: 'A thing happens',
    actualBehavior: 'A thing does not happen',
    stepsToRepro: [
      'Turn on your computer', 'Open a web browser', 'Try to do a thing',
    ],
  };
}

export default BugPage;
