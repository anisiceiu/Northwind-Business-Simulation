import React from "react";
import { useProducts } from "./hooks/useProducts";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'productId', headerName: 'ID', width: 90 },
  {
    field: 'productName',
    headerName: 'Product Name',
    width: 150,
    editable: true,
  },
    {
    field: 'categoryName',
    headerName: 'Category Name',
    width: 150,
    editable: true,
  },
    {
    field: 'supplierName',
    headerName: 'Supplier Name',
    width: 150,
    editable: true,
  },
  {
    field: 'quantityPerUnit',
    headerName: 'Quantity',
    width: 150,
    editable: true,
  },
  {
    field: 'unitPrice',
    headerName: 'Unit Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'unitsInStock',
    headerName: 'units InStock',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    //valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const ProductList = () => {
  const { data, isLoading, error, deleteMutation } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <>
     <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.productId}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        
        disableRowSelectionOnClick
      />
    </>
  );
};

export default ProductList;
