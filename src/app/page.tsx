"use client";

import { useState, useEffect } from "react";

import StockList from "@/components/stock-list";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  const [stocks, setStocks] = useState([]);

  const fetchStocks = async () => {
    try {
      const response = await fetch("/api/stocks");
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.error("Failed to fetch stocks:", error);
    }
  };

  useEffect(() => {
    fetchStocks();
    const interval = setInterval(fetchStocks, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-4">
          <Badge variant="outline">Redditrade</Badge>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 ">
          WallStreetBets Top 50 Stocks
        </h1>
        <div className="flex justify-between items-center mb-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="mb-4">
                About This Project
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  About WallStreetBets Top 50 Stocks
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Redditrade displays the top 50 most mentioned stocks on the
                  WallStreetBets subreddit. The data is updated every minute and
                  shows the stock symbol, company name, and mention count. This
                  information can be used to gauge retail investor interest but
                  should not be considered financial advice.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Close</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <ThemeToggle />
        </div>
        <Separator orientation="horizontal" />
        <StockList stocks={stocks} />
      </main>
    </div>
  );
}
