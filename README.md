# Conflicting Update Operators in MongoDB
This example demonstrates a common error when using MongoDB's update operators.  The code attempts to both `$set` and `$inc` the `age` field simultaneously, leading to unexpected behavior and potentially incorrect data.

## Problem
The `updateOne` operation uses both `$set` and `$inc` on the `age` field. The `$set` operator explicitly sets the age to 30, while `$inc` increments it by 1.  The final value of `age` is not predictable and depends on the MongoDB driver's implementation.

## Solution
The correct approach is to use only one operator to achieve the desired outcome.  If you want to set the age to 31, use only `$set`, or if you want to increment the age by 1 from its current value, use only `$inc`.