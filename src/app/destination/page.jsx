"use client";
import React from "react";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";
import { JosefinSans } from "../components/Font";

const DestinationPage = () => {
  const hendelform = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    let res = await fetch("https://crud-bakend-e51s.vercel.app/destination", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    let datas = await res.json();
    console.log(datas);
    if (datas.acknowledged) {
      alert("Hello Bangladesh");
      e.target.reset();
    }
  };
  return (
    <div
      className={`${JosefinSans.className} min-h-screen bg-slate-100 flex items-center justify-center px-4 py-16`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-cyan-500 mb-3">
            Travel Management
          </span>
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
            Add Destination
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/60">
          <form onSubmit={hendelform} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="destinationName" isRequired className="w-full">
                  <Label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                    Destination Name
                  </Label>
                  <Input
                    placeholder="Bali Paradise"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                  />
                  <FieldError className="text-rose-400 text-xs mt-1" />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired className="w-full">
                <Label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                  Country
                </Label>
                <Input
                  placeholder="Indonesia"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                />
                <FieldError className="text-rose-400 text-xs mt-1" />
              </TextField>

              {/* Category */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                    Category
                  </Label>
                  <Select.Trigger className="w-full bg-slate-50 border border-slate-200 text-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-white border border-slate-200 rounded-xl mt-1 shadow-xl">
                    <ListBox className="p-1">
                      {[
                        "Beach",
                        "Mountain",
                        "City",
                        "Adventure",
                        "Cultural",
                        "Luxury",
                      ].map((item) => (
                        <ListBox.Item
                          key={item}
                          id={item}
                          textValue={item}
                          className="text-slate-700 text-sm px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 cursor-pointer transition-colors duration-150"
                        >
                          {item}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField
                name="price"
                type="number"
                isRequired
                className="w-full"
              >
                <Label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                  Price (USD)
                </Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                />
                <FieldError className="text-rose-400 text-xs mt-1" />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired className="w-full">
                <Label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                  Duration
                </Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                />
                <FieldError className="text-rose-400 text-xs mt-1" />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField
                  name="departureDate"
                  type="date"
                  isRequired
                  className="w-full"
                >
                  <Label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                    Departure Date
                  </Label>
                  <Input
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                  />
                  <FieldError className="text-rose-400 text-xs mt-1" />
                </TextField>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField
                  name="imageUrl"
                  isRequired
                  className="w-full"
                  defaultValue="https://cdn.pixabay.com/photo/2026/05/03/03/20/03-20-08-521_1280.jpg"
                >
                  <Label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                    Image URL
                  </Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                  />
                  <FieldError className="text-rose-400 text-xs mt-1" />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired className="w-full">
                  <Label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                    Description
                  </Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200 resize-none"
                  />
                  <FieldError className="text-rose-400 text-xs mt-1" />
                </TextField>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-white font-bold tracking-widest uppercase text-sm py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
            >
              Add Destination
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
