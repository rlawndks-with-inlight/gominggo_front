import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from 'src/auth/useAuthContext';
import { ROOTS_USER } from 'src/routes/paths';
import { Col, Row } from 'src/components/elements/styled-components';
import { Button } from '@mui/material';
import BlankLayout from 'src/layouts/blank/BlankLayout';

// ----------------------------------------------------------------------

const Index = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  useEffect(() => {

  }, [user]);

  return (
    <>
      <Row style={{ height: '100vh' }}>
        <Col style={{ margin: 'auto', rowGap: '3rem', width: '90%', maxWidth: '800px' }}>
          <Button size='large' variant='contained' onClick={() => { router.push('/user/auth/sign-up') }}>회원가입</Button>
          <Button size='large' variant='contained' onClick={() => { router.push('/user/stage/add') }}>스테이지 개설</Button>
        </Col>
      </Row>
    </>
  );
}
Index.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
export default Index;