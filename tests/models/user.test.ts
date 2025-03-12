import { prismaMock } from "../prismaMock";

describe("User Model (Mocked Prisma)", () => {
  it("should create a new user", async () => {
    const mockUser = {
      id: '3',
      email: "test@example.com",
      name: "John Doe",
    };

    prismaMock.user.create.mockResolvedValue(mockUser);

    const user = await prismaMock.user.create({
      data: { email: "test@example.com", name: "John Doe" },
    });

    expect(user).toEqual(mockUser);
  });

  it("should find a user by email", async () => {
    const mockUser = {
      id: 1,
      email: "test@example.com",
      name: "John Doe",
    };

    prismaMock.user.findUnique.mockResolvedValue(mockUser);

    const user = await prismaMock.user.findUnique({
      where: { email: "test@example.com" },
    });

    expect(user).toEqual(mockUser);
  });

  it("should update a user", async () => {
    const updatedUser = {
      id: 1,
      email: "test@example.com",
      name: "Jane Doe",
    };

    prismaMock.user.update.mockResolvedValue(updatedUser);

    const user = await prismaMock.user.update({
      where: { email: "test@example.com" },
      data: { name: "Jane Doe" },
    });

    expect(user.name).toBe("Jane Doe");
  });

  it("should delete a user", async () => {
    const deletedUser = {
      id: 1,
      email: "test@example.com",
      name: "John Doe",
    };

    prismaMock.user.delete.mockResolvedValue(deletedUser);

    const user = await prismaMock.user.delete({
      where: { email: "test@example.com" },
    });

    expect(user.email).toBe("test@example.com");
  });
});
