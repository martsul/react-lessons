import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Не до конца понял эту часть, прокомментируйте если верно
  const path = request.nextUrl.pathname;

  if (!path.match("/restaurants")) {
    return;
  }

  revalidatePath(path);

  return NextResponse.json({
    status: "success",
    path,
  });
}
