"use client";

import Card from "./_components/Card";
import CardHeading from "./_components/CardHeading";
import Checkbox from "./_components/Checkbox";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import Header from "./_components/Header";
import { api } from "@/trpc/react";
import { Category } from "@prisma/client";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export default function Home() {
  const [userID, setUserID] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // Pagination states
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [initialPage, setInitialPage] = useState<number>(1);
  const maxPageCount = 7;
  const totalPages = 17;
  const displayPages = Array.from(
    { length: Math.min(maxPageCount, totalPages) },
    (_, index) => initialPage + index,
  );

  // hitting backend
  const { data, isLoading } = api.user.getCategories.useQuery(pageNumber);
  const { data: userCategories } = api.user.getUserCategories.useQuery({
    userID,
  });
  const { mutate: toggleCategory } = api.user.toggleCategory.useMutation();

  // Pageination Functions
  const handleBackwardClick = () => {
    const newStartPage = Math.max(initialPage - maxPageCount, 1);
    setInitialPage(newStartPage);
    setPageNumber(newStartPage);
  };

  const handleForwardClick = () => {
    const newStartPage = Math.min(
      initialPage + maxPageCount,
      totalPages - maxPageCount + 1,
    );
    setInitialPage(newStartPage);
    setPageNumber(newStartPage);
  };

  const handleFirstPageClick = () => {
    setInitialPage(1);
    setPageNumber(1);
  };

  const handleLastPageClick = () => {
    setInitialPage(Math.max(totalPages - maxPageCount + 1, 1));
    setPageNumber(totalPages);
  };

  // Check and Uncheck Categories
  const toggleSelectedCategory = (categoryID: string) => {
    setSelectedCategories((prev) => {
      const isSelected = prev.includes(categoryID);

      const updatedCategories = isSelected
        ? prev.filter((id) => id !== categoryID)
        : [...prev, categoryID];

      // Send the updated category status to the server
      toggleCategory({ userID, categoryID, checked: !isSelected });

      return updatedCategories;
    });
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        // Decode the token
        const decodedToken = jwt.decode(token) as { id: string };

        // Access userID from decoded token
        const userID = decodedToken?.id;
        setUserID(userID);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  useEffect(() => {
    if (userCategories) {
      setSelectedCategories(userCategories.map((category) => category.id));
    }
  }, [userCategories]);

  return (
    <>
      <Header />
      <main className="flex items-center justify-center p-10">
        <Card>
          <CardHeading>Please mark your interests!</CardHeading>
          <p className="my-4 text-center">We will keep you notified.</p>
          <h3 className="my-2 text-xl font-medium">My saved interests!</h3>
          <div className="mt-3 flex min-h-72 flex-col gap-4">
            {isLoading && (
              <p className="mt-10 text-center text-2xl font-bold text-gray-500">
                Loading...
              </p>
            )}

            {!isLoading &&
              categories.map(({ id, title }, index) => (
                <Checkbox
                  key={index}
                  label={title}
                  userID={userID}
                  categoryID={id}
                  checked={selectedCategories.includes(id)}
                  onClick={() => toggleSelectedCategory(id)}
                />
              ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-3 text-xl font-medium text-[#ACACAC]">
            <MdKeyboardDoubleArrowLeft
              className={`cursor-pointer hover:text-black ${initialPage === 1 ? "cursor-not-allowed text-gray-400" : ""}`}
              onClick={handleFirstPageClick}
            />
            <IoIosArrowBack
              className="cursor-pointer hover:text-black"
              onClick={handleBackwardClick}
            />
            {displayPages.map((page, index) => (
              <span
                key={index}
                className={`cursor-pointer hover:text-black ${page === pageNumber ? "text-black" : ""}`}
                onClick={() => setPageNumber(page)}
              >
                {page}
              </span>
            ))}

            <IoIosArrowForward
              className="cursor-pointer hover:text-black"
              onClick={handleForwardClick}
            />
            <MdKeyboardDoubleArrowRight
              className="cursor-pointer hover:text-black"
              onClick={handleLastPageClick}
            />
          </div>
        </Card>
      </main>
    </>
  );
}
