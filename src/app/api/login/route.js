import bcrypt from 'bcrypt';
import UserModel from '@/lib/models/user';
import { connectToDataBase } from '@/lib/mongo';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectToDataBase();

    const { email, password } = await req.json();

    const user = await UserModel.findOne({ email });

    if (!user) {
      // Create a new user and save it to the database
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password before saving
      const newUser = new UserModel({ email, password: hashedPassword });
      await newUser.save();

      return NextResponse.json(
        {
          message: 'User created successfully',
          user: { _id: newUser._id, email: newUser.email, name: newUser.name } // Ensure user data is returned
        },
        { status: 201 }
      );
    } else {
      if (await bcrypt.compare(password, user.password)) {
        return NextResponse.json(
          {
            message: 'Login successful',
            user: { _id: user._id, email: user.email, name: user.name } // Ensure user data is returned
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: 'Email or Password is invalid' },
          { status: 401 }
        );
      }
    }

  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
