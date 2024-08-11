//import { FaqsPage } from '@components/views/faqs';
import dynamic from 'next/dynamic';
const QueryPage     = dynamic(() => import('@views/support/query'), {loading: () => '',});
const MainLayout   = dynamic(() => import('@layout/main-layout'), {loading: () => '',});
export default function Query(props) {
  return (
    <MainLayout {...props}>
      <QueryPage {...props} />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      pageName:"Faqs",
      leftMenu: true
    },
  };
}
