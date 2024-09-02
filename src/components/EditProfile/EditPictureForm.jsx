import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";
import { Formik, Form } from "formik";
import axios from "axios";
import { useAuth } from "../../auth/AuthContext";
import app from "../../firebase";
import { getFirestore } from "firebase/firestore";

function EditPictureForm() {
  const { user } = useAuth();
  const [profile, setProfile] = useState("");
  const [profilePreview, setProfilePreview] = useState("");
  const [name, setName] = useState("");
  const db = getFirestore(app);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setProfile(user.photoUrl);
    }
  }, [user]);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(file);
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  

  const handleSubmit = async (values, actions) => {
    try {
      let profileURL = profile;

      if (profile && typeof profile !== "string") {
        const data = new FormData();
        data.append("file", profile);
        data.append("upload_preset", "tutorial");
        data.append("cloud_name", "dttd52ltg");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dttd52ltg/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error.message || "Image upload failed");
        }

        profileURL = result.url;
      }

      await axios.patch(
        "https://betweeder-production.up.railway.app/user",
        { photoUrl: profileURL, displayName: name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: name, photoUrl: profile }}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Box>
            <Flex>
              <Image src="/images/header.jpg" maxH={250} />
              <Input
                type="file"
                accept="image/*"
                id="headerInput"
                style={{ display: "none" }}
              />
            </Flex>
            <Flex pl={[2, 5]} justify="space-between" flexWrap="wrap">
              <Flex
                as="button"
                type="button"
                position="relative"
                justify="center"
                alignItems="center"
                onClick={() => document.getElementById("profileInput").click()}
              >
                <Avatar
                  border="solid 2px"
                  mt={[-6, -8, -10, -16]}
                  size="2xl"
                  src={profilePreview || profile}
                />
                <Icon
                  as={FaCamera}
                  position="absolute"
                  alignItems="center"
                  color="white"
                />
                <Input
                  type="file"
                  accept="image/*"
                  id="profileInput"
                  style={{ display: "none" }}
                  onChange={handleProfileChange}
                />
              </Flex>
            </Flex>
            <Box maxW="sm" mx="auto" p={4}>
              <VStack spacing={4}>
                <FormControl id="name">
                  <FormLabel fontSize="md" fontWeight="bold">
                    Name
                  </FormLabel>
                  <Input
                    name="name"
                    placeholder={name}
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </FormControl>
              </VStack>
            </Box>
            <Flex justify="flex-end" p={4}>
              <Button type="submit" isLoading={formikProps.isSubmitting}>
                Update
              </Button>
            </Flex>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default EditPictureForm;
