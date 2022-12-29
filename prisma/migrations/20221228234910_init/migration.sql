-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "countItems" INTEGER NOT NULL,
    "emailCustomer" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Order_emailCustomer_idx" ON "Order"("emailCustomer");
