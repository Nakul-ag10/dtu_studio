import React from 'react';
import { Link } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function Admin() {
  const { logout } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={logout} variant="outline">Logout</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Month in Pictures</CardTitle>
            <CardDescription>Manage monthly picture collections</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/month-in-pictures">
              <Button className="w-full">Manage</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Press Conferences</CardTitle>
            <CardDescription>Manage YouTube links for press conferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/press-conferences">
              <Button className="w-full">Manage</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Press Coverages</CardTitle>
            <CardDescription>Manage press coverage articles</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/press-coverages">
              <Button className="w-full">Manage</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Press Releases</CardTitle>
            <CardDescription>Manage press release documents</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/press-releases">
              <Button className="w-full">Manage</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}