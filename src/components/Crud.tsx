import { useMemo } from 'react';
import {
	MaterialReactTable,
	useMaterialReactTable,
	type MRT_ColumnDef,
} from 'material-react-table';
import { firebaseGetUsers } from '../firebase';
import { Place, User } from '../types';
import { useGetData } from '../hooks/firebase';
import { useAtomValue } from 'jotai';
import { placesAtom } from '../tools/atoms';

export const UsersTable = () => {
	const data = useGetData(firebaseGetUsers)

	const columns = useMemo<MRT_ColumnDef<User>[]>(
		() => [
			{
				accessorKey: 'first', //access nested data with dot notation
				header: 'First Name',
				size: 150,
			},
			{
				accessorKey: 'last',
				header: 'Last Name',
				size: 150,
			},
			{
				accessorKey: 'born', //normal accessorKey
				header: 'YOB',
				size: 200,
			}
		],
		[],
	);

	const table = useMaterialReactTable({
		columns,
		data
	});

	return <MaterialReactTable table={table} />;
};

export const PlacesTable = () => {
	const data = useAtomValue(placesAtom)

	const columns = useMemo<MRT_ColumnDef<Place>[]>(
		() => [
			{
				accessorKey: 'Title', //access nested data with dot notation
				header: 'Titulo',
				size: 150,
			},
			{
				accessorKey: 'Price',
				header: 'Precio',
				size: 150,
			},
			{
				accessorKey: 'Specifications.Superficie_total',
				header: 'Superficie',
				size: 200,
			}
		],
		[],
	);

	const table = useMaterialReactTable({
		columns,
		data
	})

	return <MaterialReactTable table={table} />
};
