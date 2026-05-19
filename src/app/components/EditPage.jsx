"use client";

import { ArrowUpArrowDown, Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { redirect } from "next/navigation";

export function Editpage({ data }) {
  let {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = data;
  let hendelForm = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let datas = Object.fromEntries(formData.entries());
    let res = await fetch(
      `https://crud-bakend-e51s.vercel.app/destinations/${_id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(datas),
      },
    );
    let data = await res.json();
    if (data.matchedCount > 0) {
      alert("successfully submit");
      redirect(`/destinations/${_id}`);
    }
  };
  return (
    <Modal>
      <Button variant="secondary" size="sm">
        Updat destination
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto" size="lg">
          <Modal.Dialog className="">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <ArrowUpArrowDown className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Updata Destination</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={hendelForm} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                        className="w-full"
                      >
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
                    <TextField
                      defaultValue={country}
                      name="country"
                      isRequired
                      className="w-full"
                    >
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
                        defaultValue={category}
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
                      defaultValue={price}
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
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                      className="w-full"
                    >
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
                        defaultValue={departureDate}
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
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                        className="w-full"
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
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                        className="w-full"
                      >
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
                    slot="close"
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-white font-bold tracking-widest uppercase text-sm py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
                  >
                    Add Destination
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
