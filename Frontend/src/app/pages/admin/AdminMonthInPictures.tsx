import React, { useState } from 'react';
import { Link } from 'react-router';
import { useData, MonthInPicturesItem } from '../../contexts/DataContext'
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Pencil, Trash2, Plus } from 'lucide-react';

export default function AdminMonthInPictures() {
  const { monthInPictures, addMonthInPictures, updateMonthInPictures, deleteMonthInPictures } = useData();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MonthInPicturesItem | null>(null);
  const [formData, setFormData] = useState({
    month: '',
    year: new Date().getFullYear(),
    thumbnail: '',
    imageCount: 0,
    images: '',
  });

  const resetForm = () => {
    setFormData({
      month: '',
      year: new Date().getFullYear(),
      thumbnail: '',
      imageCount: 0,
      images: '',
    });
    setEditingItem(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const imagesArray = formData.images.split(',').map(img => img.trim()).filter(img => img);

    if (editingItem) {
      updateMonthInPictures(editingItem.id, {
        month: formData.month,
        year: formData.year,
        thumbnail: formData.thumbnail,
        imageCount: imagesArray.length,
        images: imagesArray,
      });
    } else {
      addMonthInPictures({
        month: formData.month,
        year: formData.year,
        thumbnail: formData.thumbnail,
        imageCount: imagesArray.length,
        images: imagesArray,
      });
    }

    resetForm();
    setIsAddDialogOpen(false);
  };

  const handleEdit = (item: MonthInPicturesItem) => {
    setEditingItem(item);
    setFormData({
      month: item.month,
      year: item.year,
      thumbnail: item.thumbnail,
      imageCount: item.imageCount,
      images: item.images.join(', '),
    });
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this month?')) {
      deleteMonthInPictures(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Month in Pictures</h1>
        <Link to="/admin">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      <div className="mb-6">
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" />
              Add New Month
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{editingItem ? 'Edit Month' : 'Add New Month'}</DialogTitle>
              <DialogDescription>
                {editingItem ? 'Update the month details.' : 'Add a new month with pictures.'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="month">Month</Label>
                <Input
                  id="month"
                  value={formData.month}
                  onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  type="number"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="thumbnail">Thumbnail URL</Label>
                <Input
                  id="thumbnail"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="images">Image URLs (comma-separated)</Label>
                <Textarea
                  id="images"
                  value={formData.images}
                  onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                  placeholder="image1.jpg, image2.jpg, image3.jpg"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">{editingItem ? 'Update' : 'Add'}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Existing Months</CardTitle>
          <CardDescription>Manage your monthly picture collections</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Images</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monthInPictures.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.month}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.imageCount} images</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}