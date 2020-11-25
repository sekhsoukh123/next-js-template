import React from 'react';
import Layout from 'Layouts';
import { Card, CardBody, CardHeader } from '@paljs/ui/Card';
import UserForm from './userForm';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Add() {
  return (
    <Layout title="Add">
      <Card accent="Info">
        <CardHeader>Add user</CardHeader>
        <CardBody>
          <UserForm />
          <h3></h3>
        </CardBody>
      </Card>
    </Layout>
  );
}
