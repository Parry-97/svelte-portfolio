---
id: features
description: Learn how to define and use features in Rust to enable or disable optional functionality in your crate.
tags:
  - rust
title: Features in Rust
---

## Explain me how features work in Rust. How do I define ? Use them ?

In Rust, features are a way to enable or disable optional functionality in your crate (library or application). This allows you to tailor the build of your project based on the needs of your users or the environment in which your code will run.

### Defining Features

You define features in your `Cargo.toml` file under the `[features]` section. Here’s a basic example:

```toml
[features]
default = ["feature_a"]
feature_a = []
feature_b = []
```

In this example:

- The `default` feature automatically enables `feature_a` when the crate is built without specifying any features.
- `feature_a` and `feature_b` are defined but don't have any dependencies or additional features associated with them.

You can also define features that depend on other features:

```toml
[features]
default = ["feature_a"]
feature_a = []
feature_b = ["feature_a"]
```

Here, enabling `feature_b` will also enable `feature_a`.

### Using Features in Your Code

To use features in your code, you can conditionally compile sections of code based on whether a feature is enabled. You do this using the `#[cfg(feature = "feature_name")]` attribute. Here’s an example:

```rust
#[cfg(feature = "feature_a")]
fn feature_a_function() {
    println!("Feature A is enabled!");
}

#[cfg(feature = "feature_b")]
fn feature_b_function() {
    println!("Feature B is enabled!");
}
```

### Enabling Features

When building your crate, you can enable features in several ways:

1. **Using the command line**:

   ```sh
   cargo build --features "feature_b"
   ```

2. **In dependencies**:

   You can also specify features for dependencies in your `Cargo.toml`:

   ```toml
   [dependencies]
   some_crate = { version = "1.0", features = ["some_feature"] }
   ```

3. **For optional dependencies**:

   If you have an optional dependency, you can use features to conditionally include it:

   ```toml
   [dependencies]
   some_crate = { version = "1.0", optional = true }

   [features]
   use_some_crate = ["some_crate"]
   ```

### Summary

- Define features in the `[features]` section of `Cargo.toml`.
- Use `#[cfg(feature = "feature_name")]` to conditionally compile code based on the enabled features.
- Enable features when building your crate, either through the command line or by specifying them in dependencies.

This allows for flexible and customizable builds, making it easier to manage different configurations of your Rust projects.
