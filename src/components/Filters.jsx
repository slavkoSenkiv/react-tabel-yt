import { Box, Icon, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from './icons/SearchIcon';
export default function Filters() {
  return (
    <Box>
      <InputGroup size="sm" maxW="12rem">
        <InputLeftElement ppointerEvents="none">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="fillted"
          placeholder="Task Name"
          borderRadius={5}
        />
      </InputGroup>
    </Box>
  );
}
