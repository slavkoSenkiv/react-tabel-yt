// src\components\FilterPopOver.jsx
import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
  VStack,
  Text,
  Flex,
} from '@chakra-ui/react';
import FilterIcon from './icons/FilterIcon';
import { STATUSES } from '../data';
import { ColorIcon } from './StatusCell';

const StatusItem = ({ status, isActive, table }) => (
  <Flex
    align="center"
    cursor="pointer"
    borderRadius={5}
    fontWeight="bold"
    p={1.5}
    bg={isActive ? 'gray.800' : 'transparent'}
    _hover={{
      bg: 'gray.800',
    }}
    onClick={() => {
      table.setColumnFilters((prev) => {
        const currentStatusNames =
          prev.find((f) => f.id === 'status')?.value || [];

        const updatedStatuses = isActive
          ? currentStatusNames.filter((name) => name !== status.name)
          : [...currentStatusNames, status.name];

        return prev
          .filter((f) => f.id !== 'status')
          .concat({
            id: 'status',
            value: updatedStatuses,
          });
      });
    }}
  >
    <ColorIcon color={status.color} mr={3} />
    {status.name}
  </Flex>
);

export default function FilterPopOver({ table }) {
  const filterStatuses =
    table.getState().columnFilters.find((f) => f.id === 'status')?.value || [];
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button
          size="sm"
          color={filterStatuses.length > 0 ? 'blue.300' : ''}
          leftIcon={<Icon as={FilterIcon} fontSize={18} />}
        >
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Text fontSize="md" fontWeight="bold" mb={4}>
            Filter By:
          </Text>
          <Text fontWeight="bold" color="gray.400" mb={1}>
            Status
          </Text>
          <VStack align="flex-start" spacing={1}>
            {STATUSES.map((status) => (
              <StatusItem
              key={status.id}
                status={status}
                isActive={filterStatuses.includes(status.name)}
                table={table}
              />
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
