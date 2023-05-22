import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import { Center, VStack, Text, Box, Input, HStack } from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";

export default function DayOvMonth_Row({ getDaysInMonth, monthNumbers }: any) {
  function onClick_showDate(monthday: number) {
    console.log(monthday);
  }

  return (
    <>
      {monthNumbers && monthNumbers.map((monthNumber: number, key: number) => {
        const daysOfMonth = getDaysInMonth(monthNumber, 2023);
        return (
          <>
            <HStack borderWidth={1}>
              <Box borderWidth={1} w="100px">
                Month ({monthNumber})
              </Box>
              {daysOfMonth &&
                daysOfMonth.map((eachDay: any, key: any) => {
                  const weekday = moment(eachDay).day();
                  const monthday = moment(eachDay).date();

                  const dayOvMonth_gbclr = weekday in [6, 0] ? "pink" : "";

                  return (
                    <>
                      <Center
                        key={key}
                        w="35px"
                        bgColor={dayOvMonth_gbclr}
                        onClick={() => onClick_showDate(eachDay)}
                      >
                        {monthday}
                      </Center>
                    </>
                  );
                })}
            </HStack>
          </>
        );
      })}
    </>
  );
}
