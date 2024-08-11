import dynamic from 'next/dynamic';
const MyAccountDashboard  = dynamic(() => import('@views/myAccounts'), {loading: () => '',});
const MainLayout     = dynamic(() => import('@layout/main-layout'), {loading: () => '',});
export default function MyAccountPage(props) {
  return (
    <MainLayout {...props}>
      <MyAccountDashboard {...props} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  //const { events_categories } = await import('/data/data.json');
  return {
    props: {
      //data: events_categories,
      pageName:"My Account"
    },
  };
}
