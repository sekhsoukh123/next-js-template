import React from 'react';
import { Table, Button } from 'react-bootstrap';
import Layout from 'Layouts';
import { Card, CardBody } from '@paljs/ui/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Index() {
  const fruits = [
    'Lemons',
    'Raspberries',
    'Strawberries',
    'Blackberries',
    'Kiwis',
    'Grapefruit',
    'Avocado',
    'Watermelon',
    'Cantaloupe',
    'Oranges',
    'Peaches',
  ];

  const userId = 1;

  return (
    <Layout title="Index">
      <Card accent="Info">
        <header>
          <h4>Users List</h4>
        </header>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fruits.map((d, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{d}</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>

                  <td>
                    <Link href={'/user/' + userId}>
                      <a className="btn btn-primary btn-sm">
                        {' '}
                        <FontAwesomeIcon icon={faEye} />{' '}
                      </a>
                    </Link>

                    <Link href={'/user/edit/' + userId}>
                      <a className="btn btn-success btn-sm">
                        {' '}
                        <FontAwesomeIcon icon={faPencilAlt} />{' '}
                      </a>
                    </Link>
                    <Link href={'/user/edit/' + userId}>
                      <a className="btn btn-danger btn-sm">
                        {' '}
                        <FontAwesomeIcon icon={faTrash} />{' '}
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Layout>
  );
}
