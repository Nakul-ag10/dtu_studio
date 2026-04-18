import React, { useState } from 'react';
import { Link } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Pencil, Trash2, Plus, FileText, AlertCircle, CheckCircle } from 'lucide-react';

interface MonthItem {
  id: string;
  month: string;
  year: number;
  pdfPath: string;
  thumbnail: string | null;
}

export default function AdminMonthInPictures() {
  const  {user} = useAuth();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MonthItem | null>(null);
  const [monthInPictures, setMonthInPictures] = useState<MonthItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    month: '',
    year: new Date().getFullYear(),
    pdfFile: null as File | null,
    thumbnailFile: null as File | null,
  });

  React.useEffect(() => {
    fetchMonths();
  }, [user]);

  const fetchMonths = async () => {
    try {
      const response = await fetch('/api/month-in-pictures');
      const data = await response.json();
      // Map MongoDB _id to id for consistency
      const mappedData = Array.isArray(data) ? data.map((item: any) => ({
        ...item,
        id: item._id || item.id,
      })) : [];
      setMonthInPictures(mappedData);
    } catch (err) {
      console.error('Error fetching months:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      month: '',
      year: new Date().getFullYear(),
      pdfFile: null,
      thumbnailFile: null,
    });
    setEditingItem(null);
    setUploadError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      if (fieldName === 'pdf') {
        if (file.type !== 'application/pdf') {
          setUploadError('Please select a valid PDF file');
          return;
        }
        if (file.size > 50 * 1024 * 1024) {
          setUploadError('PDF file size must be less than 50MB');
          return;
        }
        setFormData({ ...formData, pdfFile: file });
      } else if (fieldName === 'thumbnail') {
        if (!file.type.startsWith('image/')) {
          setUploadError('Please select a valid image file');
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          setUploadError('Image file size must be less than 5MB');
          return;
        }
        setFormData({ ...formData, thumbnailFile: file });
      }
      setUploadError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadError(null);

    if (!formData.month || !formData.year) {
      setUploadError('Please fill in all required fields');
      return;
    }

    if (!editingItem && !formData.pdfFile) {
      setUploadError('Please upload a PDF file');
      return;
    }

    setIsUploading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('month', formData.month);
      uploadFormData.append('year', formData.year.toString());
      
      if (formData.pdfFile) {
        uploadFormData.append('pdfFile', formData.pdfFile);
      }
      
      if (formData.thumbnailFile) {
        uploadFormData.append('thumbnail', formData.thumbnailFile);
      }
      
      const token = localStorage.getItem('auth_token');

      const response = await fetch('/api/month-in-pictures', {
        method: 'POST',
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: uploadFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Upload failed');
      }

      await fetchMonths();
      resetForm();
      setIsAddDialogOpen(false);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'An error occurred during upload');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this month? The PDF file will also be deleted.')) {
      return;
    }

    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`/api/month-in-pictures/${id}`, {
        method: 'DELETE',
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      await fetchMonths();
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete month');
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
              <DialogTitle>Add New Month</DialogTitle>
              <DialogDescription>
                Add a new month with a PDF magazine and optional thumbnail.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {uploadError && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}

              <div>
                <Label htmlFor="month">Month *</Label>
                <Input
                  id="month"
                  value={formData.month}
                  onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                  placeholder="e.g., January"
                  required
                />
              </div>

              <div>
                <Label htmlFor="year">Year *</Label>
                <Input
                  id="year"
                  type="number"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="pdf">PDF File * (Max 50MB)</Label>
                <div className="mt-2 relative">
                  <Input
                    id="pdf"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, 'pdf')}
                    required={!editingItem}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                  />
                  {formData.pdfFile && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-green-700 bg-green-50 p-2 rounded">
                      <CheckCircle size={16} />
                      <span className="truncate">{formData.pdfFile.name}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="thumbnail">Thumbnail Image (Optional, Max 5MB)</Label>
                <div className="mt-2 relative">
                  <Input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'thumbnail')}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-foreground hover:file:bg-secondary/90"
                  />
                  {formData.thumbnailFile && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-blue-700 bg-blue-50 p-2 rounded">
                      <CheckCircle size={16} />
                      <span className="truncate">{formData.thumbnailFile.name}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsAddDialogOpen(false)}
                  disabled={isUploading}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Add'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Existing Months</CardTitle>
          <CardDescription>Manage your monthly PDF magazine collections</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>PDF</TableHead>
                <TableHead>Thumbnail</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monthInPictures.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.month}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText size={16} />
                      <span>Magazine</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {item.thumbnail ? (
                      <span className="text-sm text-gray-600">✓ Set</span>
                    ) : (
                      <span className="text-sm text-gray-400">None</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {monthInPictures.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No months added yet. Click "Add New Month" to get started.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}