"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { TMedicine } from "@/types/product";
import ImageGenetors from "@/components/ui/core/NMImageGenertor";
import Image from "next/image";
import { currentToken } from "@/redux/features/auth/authSlice";
import { addProduct, updatedProduct } from "@/services/products";
import { useAppSelector } from "@/redux/hooks";

export default function UpdatedProductForm({
  product,
}: {
  product: TMedicine;
}) {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: product.name || "",
      description: product.description || "",
      price: product.price || "",
      category: product.category || "",
      expiry_date: product.expiry_date || "",
      dosage: product.dosage || "",
      brand: product.brand || "",
      stock: product.stock || "",
      form: product.form || "",
      prescription_required: product.prescription_required || "",
      side_effects: product.side_effects.map((item) => ({ value: item })) || [
        { value: "" },
      ],
      uses: product.uses.map((item) => ({ value: item })) || [{ value: "" }],
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const { append: appendColor, fields: colorFields } = useFieldArray({
    control: form.control,
    name: "side_effects",
  });

  const addColor = () => {
    appendColor({ value: "" });
  };

  const { append: appendFeatures, fields: featureFields } = useFieldArray({
    control: form.control,
    name: "uses",
  });

  const addFeatures = () => {
    appendFeatures({ value: "" });
  };

  const [productImage, setProductImage] = useState<string>(product.image);
  const handileClickChengeImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0];
    const image = await ImageGenetors(file);
    setProductImage(image);
  };
  // console.log(specFields);
  const handileClickRemove = () => {
    setProductImage("");
  };
  const token = useAppSelector(currentToken);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const uses = data?.uses.map((item: { value: string }) => item.value);
    const side_effects = data?.side_effects.map(
      (item: { value: string }) => item.value
    );
    const modifiyData = {
      ...data,
      uses,
      side_effects,
      image: productImage,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
      prescription_required: Boolean(data.prescription_required),
    };
    const res = await updatedProduct(modifiyData, product._id, token!);
    console.log(res);
    if (res?.success) {
      router.push("/admin/products");
    }
  };
  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <div className="flex items-center space-x-4 mb-5 ">
        <h1 className="text-xl font-bold">Update Product</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Basic Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dosage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dosage</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expiry_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="form"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Form</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prescription_required"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prescription Required</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select prescription true or false" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-3">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Images</p>
            </div>
            <div className="flex gap-4 ">
              <div className="flex flex-col items-center w-full gap-4">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handileClickChengeImage}
                />
                <label
                  htmlFor="image-upload"
                  className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
                >
                  Upload Image
                </label>
              </div>
              {productImage && (
                <div className="relative w-36 h-36 rounded-md overflow-hidden border border-dashed border-gray-300">
                  {/* <Image
                    width={500}
                    height={500}
                    src={productImage}
                    alt={`Preview`}
                    className="object-cover w-full h-full"
                  /> */}
                  <img src={productImage} alt="" />
                  <Button
                    onClick={handileClickRemove}
                    type="button"
                    size="sm"
                    className="bg-red-300 cursor-pointer hover:bg-red-400 absolute -top-0 -right-0 w-6 h-6 p-0 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Add side effects</p>
              <Button
                variant="outline"
                className="size-10"
                onClick={addColor}
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {colorFields.map((colorField, index) => (
                <div key={colorField.id}>
                  <FormField
                    control={form.control}
                    name={`side_effects.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> Side Effect {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Add use case</p>
              <Button
                onClick={addFeatures}
                variant="outline"
                className="size-10"
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="my-5">
              {featureFields.map((featureField, index) => (
                <div className="my-3" key={featureField.id}>
                  <FormField
                    control={form.control}
                    name={`uses.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> Use Case {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Update Product....." : "Update Product"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
