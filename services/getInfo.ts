import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { Website } from "./types";
import { DEFAULT_WEBSITE } from "./constants";

export const useGetProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "projects"),
      (snapshot) => {
        const projectsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
      },
      (error) => {
        setError(error);
        console.error("Error fetching projects:", error);
      },
    );

    return () => unsubscribe();
  }, []);

  const project: Website = projects
    ? projects[0]?.["POSITIVE_RESET_SERVICES"]
    : DEFAULT_WEBSITE;

  return { project, error };
};

export const fetchProjects = async () => {
  try {
    const data = [];
    const querySnapshot = await getDocs(collection(db, "projects"));

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
