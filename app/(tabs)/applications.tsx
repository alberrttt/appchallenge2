import { Box, Heading, Text } from "@gluestack-ui/themed";
import { useApplications } from "../store";

export default function () {
  const apps = useApplications();
  return (
    <>
      <Box p={"$8"} px={"$4"} mt="$10">
        {apps.applications.map((app, key) => {
          return (
            <Box key={key}>
              <Heading>{app.info.title}</Heading>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
