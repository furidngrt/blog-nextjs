---
title: "How to Install Go (Golang)"
slug: "how-to-install-go"
date: "August 18, 2024"
author: "DQ"
---

 How to Install Go (Golang) on Your System


Go, also known as Golang, is a statically typed, compiled programming language designed by Google. It is known for its simplicity, efficiency, and strong performance in concurrent programming. Whether you're building web applications, distributed systems, or command-line tools, Go is a great choice. This guide will walk you through the steps to install Go on your system.

Step 1: Download the Go Installer

Visit the official [Go download page](https://golang.org/dl/).
Choose the installer for your operating system:

   - Windows: `.msi` installer
   - macOS: `.pkg` installer
   - Linux: tarball (`.tar.gz`)

Step 2: Install Go

 On Windows

Run the `.msi` installer you downloaded.
Follow the prompts in the installation wizard.
After the installation is complete, Go will be installed in the `C:\Go` directory by default.
The installer will also set up the necessary environment variables.

On macOS

Open the `.pkg` file you downloaded.
Follow the instructions in the installation wizard.
By default, Go will be installed in `/usr/local/go`.

On Linux

Open a terminal and navigate to the directory where you downloaded the tarball.
Extract the tarball using the following command:

   ```
   sudo tar -C /usr/local -xzf go1.xx.x.linux-amd64.tar.gz
   ```

Add Go's binary directory to your PATH by adding the following line to your `~/.profile or ~/`.bashrc file:

```
export PATH=$PATH:/usr/local/go/bin
```

Reload your profile by running:

```
source ~/.profile
```