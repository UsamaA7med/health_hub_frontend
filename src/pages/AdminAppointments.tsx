import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react'

const AdminAppointments = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold">All Appointments</p>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Paitent</TableColumn>
          <TableColumn>Department</TableColumn>
          <TableColumn>Date&Time</TableColumn>
          <TableColumn>Doctor</TableColumn>
          <TableColumn>Fees</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2023-01-01 12:00:00</TableCell>
            <TableCell className="flex gap-2 items-center">
              <Avatar size="sm" src="/doc.png" />
              John Doe
            </TableCell>
            <TableCell>$100</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>2</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2023-01-01 12:00:00</TableCell>
            <TableCell className="flex gap-2 items-center">
              <Avatar size="sm" src="/doc.png" />
              John Doe
            </TableCell>
            <TableCell>$100</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>3</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2023-01-01 12:00:00</TableCell>
            <TableCell className="flex gap-2 items-center">
              <Avatar size="sm" src="/doc.png" />
              John Doe
            </TableCell>
            <TableCell>$100</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>4</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2023-01-01 12:00:00</TableCell>
            <TableCell className="flex gap-2 items-center">
              <Avatar size="sm" src="/doc.png" />
              John Doe
            </TableCell>
            <TableCell>$100</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default AdminAppointments
