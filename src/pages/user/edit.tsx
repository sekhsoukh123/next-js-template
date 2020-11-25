import React from 'react';
import Layout from 'Layouts';
import { Card, CardBody, CardHeader } from '@paljs/ui/Card';
import UserForm from './userForm';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Edit() {
  return (
    <Layout title="Edit">
      <Card accent="Info">
        <CardHeader>Edit user</CardHeader>
        <CardBody>
          <UserForm />
        </CardBody>
      </Card>
    </Layout>
  );
}
